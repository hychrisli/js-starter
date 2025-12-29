import { asyncSaveUser, asyncFindUsers, asyncFindUserById } from '../repositories/userRepository.js';

export function createUser(userReq, res) {
  asyncSaveUser(userReq).then(msg => {
    res.status(201).send(`User has been created successfully`);
  }).catch(err => {
    console.error("Failed to create user: ", err);
    res.status(500).send(`Failed to create user due to ${err.message}`);
  }
  );
}

export function findUsers(res) {
  asyncFindUsers().then(users => {
    res.status(200).json(users);
  }).catch(err => {
    console.error("Failed to find users", err);
    res.status(500).send(`Failed to find users due to ${err.message}`);
  });
}

export function findUserById(id, res) {
  asyncFindUserById(id).then(user => {
    if (!user) {
      // user is null
      res.status(404).send(`Not found user with id ${id}`);
    } else {
      res.status(200).json(user);
    }
  }).catch(err => {
    console.error("Failed to find users", err);
    res.status(500).send(`Failed to find users due to ${err.message}`);
  });
}