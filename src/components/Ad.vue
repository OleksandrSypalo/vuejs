<template>
    <div>
        <b-card :title="title" tag="article" :sub-title="subtitle">
            <p class="card-text">
                {{description}}
            </p>
            <div v-if="currentUserHasThisAd">
                <b-button :to="{name: 'delete', params: {id: $route.params.id}}" variant="danger">
                    Delete
                </b-button>
                &nbsp;
                <b-button :to="{name: 'edit', params: {id: $route.params.id}}" variant="primary">
                    Edit
                </b-button>
            </div>
        </b-card>
    </div>
</template>

<script>
    import DB from '../db';
    import utils from '../utils';
    import auth from '../auth';

    let userToken = auth.getToken();
    let currentUserID = userToken ? +DB.get('users', userToken).id : null;

    export default {
        data() {
            return {
                author: '',
                date: 0,
                title: ',',
                description: '',
                currentUserHasThisAd: false
            };
        },
        beforeMount() {
            const id = this.$route.params.id;
            const data = DB.get('ads', {id: +id});

            this.author = DB.get('users', {id: data.authorID}).username;
            this.date = data.date;
            this.title = data.title;
            this.description = data.description;
            this.currentUserHasThisAd = (+data.authorID === currentUserID);
        },
        computed: {
            subtitle() {
                const date = utils.replaceDate(this.date);
                const author = this.author.trim();
                return `${author} (${date})`;
            }
        }
    };
</script>
