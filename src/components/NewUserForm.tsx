import React, { useState } from "react";
import { Form, Button, Modal, Stack, FloatingLabel } from "react-bootstrap";
import { User } from "../interfaces/user";
import { Food } from "../interfaces/food";

interface NewUserFormProps {
    userList: User[];
    currentUser: User;
    setCurrentUser: (newUser: User) => void;
    setCustomerList: (newList: Food[]) => void;
    setUserList: (newList: User[]) => void;
}

export function NewUserForm({
    userList,
    currentUser,
    setCurrentUser,
    setCustomerList,
    setUserList
}: NewUserFormProps) {
    const [newName, setNewName] = useState<string>("");
    const [newRole, setNewRole] = useState<string>("employee");
    const [showForm, setShowForm] = useState<boolean>(false);

    function addNewUser() {
        const duplicateUser: User | undefined = userList.find(
            (user: User) => user.name === newName && user.role === newRole
        );

        const newUser: User = {
            name: newName,
            role: newRole as User["role"],
            foodList: []
        };

        if (duplicateUser === undefined) {
            setCurrentUser(newUser);
            const newUserList: User[] = [
                ...userList.map((user: User) => ({
                    ...user,
                    foodList: user.foodList.map((food: Food) => ({
                        ...food,
                        ingredients: [...food.ingredients]
                    }))
                })),
                newUser
            ];
            setUserList(newUserList);
            if (newUser.role === "customer") setCustomerList(newUser.foodList);
            closeForm();
        } else {
            //error message Alert here
        }
    }

    function closeForm() {
        setShowForm(false);
    }

    return (
        <div hidden={currentUser.role !== "owner"}>
            <Button
                onClick={() => {
                    setShowForm(true);
                }}
            >
                Add User
            </Button>

            <Modal show={showForm} onHide={closeForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack gap={3}>
                        <Form.Group>
                            <FloatingLabel label="User Name">
                                <Form.Control
                                    type="user name"
                                    placeholder="User's Name"
                                    aria-label="Name_Field"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setNewName(e.target.value)}
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Select Role</Form.Label>
                            <Form.Select
                                aria-label="Select desired role"
                                value={newRole}
                                onChange={(
                                    e: React.ChangeEvent<HTMLSelectElement>
                                ) => setNewRole(e.target.value)}
                            >
                                <option>employee</option>
                                <option>customer</option>
                            </Form.Select>
                        </Form.Group>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeForm}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={addNewUser}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
