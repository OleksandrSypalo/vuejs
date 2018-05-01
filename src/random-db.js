import utils from './utils';

export default {
    initForDemo() {
        this.drop('users');
        this.drop('ads');

        /* create 2 users */
        for (let i = 0; i < 2; i++) {
            this.set('users', {
                [this.uniq()]: createRandomUser(i + 1)
            });
        }


        /* create 20 random ads */
        for (let i = 0; i < 20; i++) {
            this.set('ads', {
                [this.uniq()]: createRandomAd(i + 1)
            });
        }

        localStorage.demoCreated = 1;
        this.onCreateTriggers();
    }

};

function createRandomUser(id) {
    return {
        id: id,
        username: 'user' + id,
        password: '1111'
    };
}

function createRandomAd(id) {
    return {
        id: id,
        title: utils.randomText({
            wordsLength: utils.randomNumber(5)
        }),
        description: utils.randomText({
            wordsLength: utils.randomNumber(12),
            sentencesLength: 2
        }),
        authorID: Math.random() > 0.5 ? 1 : 2, // user1 or user2
        date: Date.now() - (utils.randomNumber(1e8) + 1e8) // now - (1...2) days
    };
}
