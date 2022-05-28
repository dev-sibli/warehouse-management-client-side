import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-2xl'>Difference between javascript and nodejs</h2>
            <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            <h2 className='text-2xl'>When should you use nodejs and when should you use mongodb</h2>
            <p><strong>NodeJS</strong> is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.</p>
            <p><strong>MongoDB</strong> is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
            <h2 className='text-2xl'>Differences between sql and nosql databases.</h2>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h2 className='text-2xl'>What is the purpose of jwt and how does it work</h2>
            <p>JWT/JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
        </div>
    );
};

export default Blogs;