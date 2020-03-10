import React from 'react';

const Scroll = ({ children }) => (
    <div style={{ overflow: 'scroll', border: '2px solid gray', height: '100vh', boxShadow:'0px 2px 3px rgba(0, 0, 0, 0.04)' }}>
        {children}
    </div>
)

export default Scroll;