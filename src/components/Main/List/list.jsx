import React,{useContext} from 'react';
import {List as MUIList, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'
import {Delete, MoneyOff} from '@material-ui/icons'
import {ExpenseTrackerContext} from '../../../Context/context'
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const {transactions, deleteTransaction} = useContext(ExpenseTrackerContext);

    return(
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) =>(
                    <Slide Direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`${transaction.amount}-${transaction.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
                            <Delete/>
                        </IconButton>
                    </ListItemSecondaryAction>
                    </ListItem>
                    </Slide>
                ))}
        </MUIList>
    )
}

export default List;