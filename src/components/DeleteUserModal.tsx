import React, { useState } from "react";
import { Button, Modal, Stack, Card } from "react-bootstrap";
import { User } from "../interfaces/user";
import { Food } from "../interfaces/food";

interface DeleteUserModalProps {
    currentUser: User;
    userList: User[];
    setUserList: (newList: User[]) => void;
}

export function DeleteUserModal({
    currentUser,
    userList,
    setUserList
}: DeleteUserModalProps): JSX.Element {
    const [showForm, setShowForm] = useState<boolean>(false);

    function closeForm() {
        setShowForm(false);
    }

    function deleteUser(deletedUser: User) {
        const deletedUserIndex: number = userList.findIndex(
            (user: User) =>
                user.role === deletedUser.role && user.name === deletedUser.name
        );
        // Create deep copy of user list
        const userListCopy = userList.map((user: User) => ({
            ...user,
            foodList: user.foodList.map((food: Food) => ({
                ...food,
                ingredients: [...food.ingredients]
            }))
        }));
        userListCopy.splice(deletedUserIndex, 1);
        setUserList(userListCopy);
    }

    return (
        <div hidden={currentUser.role !== "owner"}>
            <Button
                onClick={() => {
                    setShowForm(true);
                }}
            >
                Delete a User
            </Button>

            <Modal show={showForm} onHide={closeForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete a User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack gap={3}>
                        {userList
                            .filter((user: User) => user.role !== "owner")
                            .map((user: User) => {
                                return (
                                    <Card key={user.name + user.role}>
                                        <div
                                            style={{
                                                margin: "10px",
                                                fontWeight: "bolder"
                                            }}
                                        >
                                            {user.name + " (" + user.role + ")"}
                                        </div>
                                        <div
                                            hidden={user.role !== "customer"}
                                            style={{ marginLeft: "10px" }}
                                        >
                                            Food in cart:{" "}
                                            {user.foodList.map((food: Food) => {
                                                return (
                                                    <div
                                                        key={food.id}
                                                        style={{
                                                            textAlign: "center"
                                                        }}
                                                    >
                                                        {food.name}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <Button
                                            onClick={() => {
                                                deleteUser(user);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </Card>
                                );
                            })}
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeForm}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
