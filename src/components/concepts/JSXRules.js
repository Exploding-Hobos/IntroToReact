import React from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

import JSXCompiler from '../JSXCompiler'

const JSXRules = function () {
    return (
        <Container className='main'>
            <Row>
                <Col xs='12'>
                    <h1>YeeT</h1>

                    <p>Something spooky is going on here...</p>
                    <dl>
                        <dt>Resembles HTML</dt>
                        <dd>It's not HTML. Closer to JS</dd>
                        <dt>React.createElement()</dt>
                        <dd>Used to construct and update the DOM</dd>
                        <dt>Not required</dt>
                        <dd>Developers don't have to use JSXRules</dd>
                    </dl>
                    <hr />
                    <h1>Egghead.io's JSX Compiler</h1>
                    <JSXCompiler />
                
                
                </Col>
            </Row>
        </Container>
    );


};

export default JSXRules;