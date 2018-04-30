<template>
    <div class="navbar-shadow">
        <b-navbar toggleable="md" fixed="top" type="dark" variant="primary">
            <b-navbar-brand to="/">Hello {{customUsername || 'guest'}}!</b-navbar-brand>

            <b-navbar-nav>
                <b-nav-item v-if="loggedIn" to="/edit" left>Create Ad</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item v-if="loggedIn" to="/logout" left>Logout</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    import auth from '../auth';

    export default {
        data() {
            return {
                loggedIn: auth.loggedIn(),
                customUsername: auth.username()
            };
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
    .navbar-shadow {
        position: relative;
        height: 56px;
    }
</style>
