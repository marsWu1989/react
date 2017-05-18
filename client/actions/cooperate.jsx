import COOPERATE from '../constants/cooperate';

export default function cooperate(stories) {
    return {
        type: COOPERATE,
        amount: stories
    };
}

