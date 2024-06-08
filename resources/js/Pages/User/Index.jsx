import React from "react";
import Layout from "../../Layouts/Layout";

const Index = (props) => {
    return (
        <>
            <Layout>
                <h1>ユーザー一覧</h1>
                <ul>
                    {props.users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </Layout>
        </>
    );
};

export default Index;
