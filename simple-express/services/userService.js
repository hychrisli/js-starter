import { asyncSaveUser } from '../repositories/userRepository.js';

export function createUser(userReq, res) {
  asyncSaveUser(userReq).then(msg => {
    res.status(201).send(`User has been created successfully`);
  }).catch(err => {
    console.error("Failed to create user: ", err);
    res.status(400).send(`Failed to create user due to ${err.message}`);
  }
  );
}