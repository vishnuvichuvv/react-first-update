import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({ review }) {
    const [open, setOpen] = useState(false);
    return (
        <div><Button className='p-3 mt-3 '
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
        >
            Review
        </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        {
                            review.map(item => (
                                <>
                                    <h2>Name : {item.name}</h2>
                                    <h3>Posted date : {item.date}</h3>
                                    <h3>Rating : {item.rating}</h3>
                                    <p>{item.comments}</p>
                                </>
                            )
                            )
                        }

                    </div>
                </Collapse>
            </div></div>
    )
}

export default Review