import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useSlotProps } from '@mui/base';

export default function ExpenseList(props) {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        marginTop: '1.7%',
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      <li>
        <ul>
          <ListSubheader>{`Automobile`}</ListSubheader>
          {props.Automobile.map((item) => (
            <ListItem key={`${item}`}>
              <ListItemText primary={` ${item}`} />
            </ListItem>
          ))}
        </ul>
        <ul>
          <ListSubheader>{`Entertainment`}</ListSubheader>
          {props.Entertainment.map((item) => (
            <ListItem key={`${item}`}>
              <ListItemText primary={`${item}`} />
            </ListItem>
          ))}
        </ul>
        <ul>
          <ListSubheader>{`Travel`}</ListSubheader>
          {props.Travel.map((item) => (
            <ListItem key={`${item}`}>
              <ListItemText primary={` ${item}`} />
            </ListItem>
          ))}
        </ul>
        <ul>
          <ListSubheader>{`Food`}</ListSubheader>
          {props.Food.map((item) => (
            <ListItem key={`${item}`}>
              <ListItemText primary={` ${item}`} />
            </ListItem>
          ))}
        </ul>
        <ul>
          <ListSubheader>{`Personal`}</ListSubheader>
          {props.Personal.map((item) => (
            <ListItem key={`${item}`}>
              <ListItemText primary={` ${item}`} />
            </ListItem>
          ))}
        </ul>
        <ul>
          <ListSubheader>{`Utilities`}</ListSubheader>
          {props.Utilities.map((item) => (
            <ListItem key={`${item}`}>
              <ListItemText primary={` ${item}`} />
            </ListItem>
          ))}
        </ul>{' '}
        <ul>
          <ListSubheader>{`Health Care`}</ListSubheader>
          {props.HealthCare.map((item) => (
            <ListItem key={`${item}`}>
              <ListItemText primary={`${item}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
}
