import FORECAST from '../constants/forecast';

export default function forecast(stories) {
    return {
        type: FORECAST,
        amount: stories
    };
}

