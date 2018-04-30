<template>
    <div v-if="!loggedIn">
        <b-card tag="article" bg-variant="light" title="Login Form">
            <b-form @submit.prevent="login" class="row">
                <b-form-group class="col-4" label="Username:" label-class="text-sm-left">
                    <b-input v-model="username"
                             id="username"
                             placeholder="Enter Username"
                    />
                </b-form-group>
                <b-form-group class="col-4" label="Password:" label-class="text-sm-left">
                    <b-input v-model="password"
                             type="password"
                             id="password"
                             placeholder="Enter Password"
                    />
                </b-form-group>
                <b-form-group class="col-4" label="&nbsp;">
                    <b-button class="btn-block" type="submit" variant="primary">Submit</b-button>
                </b-form-group>
            </b-form>
            <div v-if="error">
                <b-alert show
                         variant="danger"
                         class="no-margin-bottom"
                >{{error}}
                </b-alert>
            </div>
        </b-card>
    </div>
</template>

<script>
    import auth from '../auth';

    export default {
        data() {
            return {
                loggedIn: auth.loggedIn(),
                customUsername: auth.username(),
                username: 'user1',
                password: '1111',
                error: false
            };
        },
        methods: {
            login() {
                this.error = false;

                auth.login({
                    username: this.username,
                    password: this.password
                }, (loggedIn, res) => {
                    if (loggedIn) {
                        this.$router.replace(this.$route.query.redirect || '/');
                    } else {
                        this.error = res.error || 'Unknown error';
                    }
                });
            }
        },
        created() {
            auth.onChangeTriggersData.push(loggedIn => {
                this.loggedIn = loggedIn;
                this.customUsername = loggedIn ? auth.username() : '';
            });
        }
    };
</script>
<style>
    .no-margin-bottom {
        margin-bottom: 0;
    }
</style>
