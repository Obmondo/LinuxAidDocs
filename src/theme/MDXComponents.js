import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

const TableWrapper = (props) => (
    <div className="table-wrapper" style={{ overflowX: 'auto', width: '100%' }}>
        <table {...props} />
    </div>
);

export default {
    ...MDXComponents,
    table: TableWrapper,
};
