<template>
    <div>
        <b-card tag="article" bg-variant="light" title="Create Ad">
            <b-form @submit.prevent="onSubmit">
                <b-form-group label="Title:" label-for="titleArea">
                    <b-form-input id="titleArea"
                                  type="text"
                                  v-model="form.title"
                                  required
                                  placeholder="Enter title"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Description:" label-for="descriptionArea">
                    <b-form-textarea id="descriptionArea"
                                     v-model="form.description"
                                     placeholder="Enter description"
                                     :rows="3"
                                     :max-rows="6">
                    </b-form-textarea>
                </b-form-group>

                <b-button type="submit" variant="primary">
                    {{$route.params.id ? 'Save' : 'Create'}}
                </b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
    import DB from '../db';
    import auth from '../auth';

    let userToken = auth.getToken();
    let currentUserID = userToken ? +DB.get('users', userToken).id : null;

    export default {
        data() {
            return {
                id: null,
                form: {
                    title: '',
                    description: ''
                }
            };
        },
        beforeMount() {
            const id = +this.$route.params.id;
            let data = DB.get('ads', {id: id});

            if (data && currentUserID !== +data.authorID) {
                this.$router.replace('/' + id);
            }

            if (id && data) {
                this.form.title = data.title;
                this.form.description = data.description;
                this.id = data.id;
            }
        },
        methods: {
            onSubmit() {
                let userToken = auth.getToken();
                let userId = userToken ? +DB.get('users', userToken).id : null;
                let id;
                let dbID;

                if (!this.id) {
                    id = DB.getLastID('ads') + 1;
                    dbID = DB.uniq();
                } else {
                    id = this.id;
                    dbID = DB.getID('ads', {id: id});
                }

                DB.set('ads', {
                    [dbID]: {
                        id: id,
                        title: this.form.title,
                        description: this.form.description,
                        authorID: userId,
                        date: Date.now()
                    }
                });

                this.$router.replace('/' + id);
            }
        }
    };
</script>
