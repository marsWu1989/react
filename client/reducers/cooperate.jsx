import COOPERATE from '../constants/cooperate';

export default function cooperate(number = null, action) {
    if (action.type === COOPERATE) {
        return action.amount;
    }

    return number;
}

