import React from 'react';

const ListItem = ({song}) =>  {

    return <li>{song["im:name"].label}</li>

}

export default ListItem;