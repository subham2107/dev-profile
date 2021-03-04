/* eslint-disable no-plusplus */
const express = require('express');

const axios = require('axios');

const router = express.Router();

const developers = [];

function countId(arr) {
    let occurs = 0;
    for (let i = 0; i < arr.length; i++) {
        if ('avatar_url' in arr[i]) occurs++;
    }
    return occurs;
}

router.get('/', (req, res) => {
    const dev = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < countId(developers); i++) {
        const { id } = developers[i];
        const avatarUrl = developers[i].avatar_url;
        dev.push({ id, avatar_url: avatarUrl });
    }
    res.status(200).send(dev);
});

router.post('/', (req, res) => {
    const githubId = req.body.github_id;
    const linkedinId = req.body.linkedin_id;
    const codechefId = req.body.codechef_id;
    const hackerrankId = req.body.hackerrank_id;
    const twitterId = req.body.twitter_id;
    const mediumId = req.body.medium_id;
    let id;
    let avatarUrl;
    let name;
    let company;
    let blog;
    let location;
    let email;
    let bio;

    axios(`https://api.github.com/users/${githubId}`).then((response) => {
        Object.keys(response.data).forEach((key) => {
            req.body[key] = response.data[key];
            id = req.body.login;
            avatarUrl = req.body.avatar_url;
            name = req.body.name;
            company = req.body.company;
            blog = req.body.blog;
            location = req.body.location;
            email = req.body.email;
            bio = req.body.bio;
        });
        if (id != null) {
            developers.push({
                id,
                avatar_url: avatarUrl,
                name,
                company,
                blog,
                location,
                email,
                bio,
                github_id: id,
                linkedin_id: linkedinId,
                codechef_id: codechefId,
                hackerrank_id: hackerrankId,
                twitter_id: twitterId,
                medium_id: mediumId,
            });
            res.statusMessage = 'User Created';
            res.status(201).send({
                id,
            });
        } else {
            res.status(404).send({
                error: 'GitHub username is invalid',
            });
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    let name;
    let htmlUrl;
    let description;
    let updatedAt;
    let repos = {};
    const reposList = [];
    // id validate here if already in developers or not
    axios(`https://api.github.com/users/${id}/repos`).then((response) => {
        // console.log(response.data.length);
        for (let i = 0; i < response.data.length; i++) {
            name = response.data[i].name;
            htmlUrl = response.data[i].html_url;
            description = response.data[i].description;
            updatedAt = response.data[i].updated_at;
            repos = {
                name,
                html_url: htmlUrl,
                description,
                updated_at: updatedAt,
            };
            reposList.push(repos);
        }

        if (id != null) {
            for (let i = 0; i < 2 * countId(developers); i++) {
                // console.log(`hi ${developers[i].id}`);
                // console.log(`hello ${id}`);
                if (developers[i].id === id) {
                    developers.splice(i + 1, 0, { repos: reposList });
                    const obj1 = developers[i];
                    const obj2 = developers[i + 1];
                    const result = { ...obj1, ...obj2 };
                    res.statusMessage = 'Valid User';
                    res.status(200).send(result);
                    break;
                }
            }
        } else {
            res.status(404).send({
                error: 'User does not exist',
            });
        }
    });
});
/*
router.delete('/:id', (req, res) => {
  developers.remove // complete it


};
*/
module.exports = router;
