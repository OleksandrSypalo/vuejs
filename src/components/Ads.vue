<template>
    <div>
        <div class="margin-bottom-1rem">
            <component-login></component-login>
        </div>
        <b-table responsive striped
                 class="margin-bottom-1rem"
                 :fields="fields"
                 :items="currentItems"
                 :show-empty=true
        >
            <template slot="empty">
                <div>
                    <p>There are no records to show</p>
                    <b-link to="/init-demo">Create ads and users for demo</b-link>
                </div>
            </template>
            <template slot="hasEdit" slot-scope="data">
                <div v-if="data.value.is" class="width-4_5">
                    <b-button :to="{name: 'delete', params: {id: data.value.id}}"
                              variant="danger"
                              size="sm"
                    >
                        <v-icon name="trash-2"></v-icon>
                    </b-button>
                    <b-button :to="{name: 'edit', params: {id: data.value.id}}"
                              variant="primary"
                              size="sm"
                    >
                        <v-icon name="edit-2"></v-icon>
                    </b-button>
                </div>
            </template>
            <template slot="title" slot-scope="data">
                <router-link :to="{name: 'ad', params:{id: data.value.id}}">
                    {{data.value.title}}
                </router-link>
            </template>
        </b-table>
        <b-pagination align="right"
                      :per-page="perPage"
                      v-model="currentPage"
                      :total-rows="totalRows"
        ></b-pagination>
    </div>
</template>

<script>
    import DB from '../db';
    import utils from '../utils';
    import auth from '../auth';

    let userToken = auth.getToken();
    let userId = userToken ? +DB.get('users', userToken).id : null;
    let users = Object.values(DB.get('users'));

    export default {
        data() {
            return {
                perPage: 5,
                currentPage: 1,

                fields: [
                    {key: 'id', label: '#'},
                    {
                        key: 'title', label: 'Title', formatter: (value, key, item) => {
                            return {
                                title: utils.substring(value, 16),
                                id: item.id
                            };
                        }
                    },
                    {
                        key: 'description', label: 'Description', formatter: (value) => {
                            return utils.substring(value, 50);
                        }
                    },
                    {
                        key: 'authorID',
                        label: 'Author',
                        formatter: (value) => {
                            let authorName = '-';
                            users.forEach((userData) => {
                                if (+userData.id === +value) {
                                    authorName = userData.username;
                                    return false; // break
                                }
                            });

                            return authorName;
                        }
                    },
                    {
                        key: 'date',
                        label: 'Date',
                        formatter: (value) => {
                            return value ? utils.replaceDate(value) : '-';
                        }
                    },
                    {
                        key: 'hasEdit',
                        label: 'Edit',
                        formatter: (value, key, item) => {
                            return {
                                is: !!(userId && +userId === +item.authorID),
                                id: item.id
                            };
                        }
                    },
                ],
                items: getItems()
            };
        },
        computed: {
            currentItems() {
                let firstItemIndex = (this.currentPage - 1) * this.perPage;
                return this.items.slice(firstItemIndex, firstItemIndex + this.perPage);
            },
            totalRows() {
                return this.items.length;
            }
        },
        created() {
            auth.onChangeTriggersData.push(loggedIn => {
                let userId = loggedIn ? +DB.get('users', auth.getToken()).id : null;

                this.fields[5].formatter = (value, key, item) => {
                    return {
                        is: !!(userId && +userId === +item.authorID),
                        id: item.id
                    };
                };
            });
            DB.setTrigger(['set', 'drop'], 'ads', () => {
                this.items = getItems();
            });
        },
    };

    function getItems() {
        return Object
            .values(DB.get('ads'))
            .sort((a, b) => {
                return a.id > b.id ? 1 : -1;
            });
    }
</script>

<style>
    .width-4_5 {
        width: 4.5em;
    }

    .width-4_5 > .btn:first-child {
        margin-right: 4px;
    }

    .icon {
        width: 1em;
    }
</style>
