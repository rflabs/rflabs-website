
const SET_TEAMS = 'SET_TEAMS';
const SET_ROUND = 'SET_ROUND';
const SET_QUESTION = 'SET_QUESTION';
const SET_WINNER = 'SET_WINNER'
const SET_SCORE = 'SET_SCORE'
const SET_STEAL_QUESTION = 'SET_STEAL_QUESTION'

export function setTeams(roster) {
    return {
        type: SET_TEAMS,
        team1:roster.teamOne,
        team2:roster.teamTwo
    }
}

export function setRound(round) {
    let activeTeam;
    if (round.activeTeam === 'team1') {
        activeTeam = 'Team 1'
    } else {
        activeTeam = 'Team 2'
    }
    return {
        type: SET_ROUND,
        round: round.round,
        activeTeam: activeTeam,
        playerIndex: round.playerIndex,
        questionIndex: round.questionIndex
    }
}

export function setQuestion(question) {
    return {
        type: SET_QUESTION,
        question: question.text,
        picklist: question.picklist,
        mediaURL: question.mediaURL
    }
}

export function setScore(score) {
    return {
        type: SET_SCORE,
        team1: score.team1,
        team2: score.team2
    }
}

export function setWinner(winner) {
    return {
        type: SET_WINNER,
        winner: winner
    }
}

export function setStealQuestion(stealQuestion){
    return {
        type: SET_STEAL_QUESTION,
        stealQuestion: stealQuestion
    }
}

const initialState = {
    teamOnePlayers: null,
    teamTwoScore: 0,
    teamTwoPlayers: null,
    teamOneScore: 0,
    round: null,
    activeTeam: null,
    playerIndex: null,
    questionIndex: null,
    question: null,
    picklist: null,
    mediaURL: null,
    winner: null,
    stealQuestion: null
}

export default function apps (state = initialState, action) {
    switch(action.type) {
        case SET_TEAMS:
            return Object.assign({},state , {
                teamOnePlayers: action.team1,
                teamTwoPlayers: action.team2,
            })
        case SET_ROUND:
            return Object.assign({},state , {
                round: action.round,
                activeTeam: action.activeTeam,
                playerIndex: action.playerIndex,
                questionIndex: action.questionIndex
            })
        case SET_SCORE:
            return Object.assign({},state , {
                teamOneScore: action.team1,
                teamTwoScore: action.team2
            })
        case SET_QUESTION:
            return Object.assign({},state , {
                question: action.question,
                picklist: action.picklist,
                mediaURL: action.mediaURL,
            })
        case SET_WINNER:
            return Object.assign({}, state, {
                winner: action.winner
            })
        case SET_STEAL_QUESTION:
        return Object.assign({}, state, {
            stealQuestion: action.stealQuestion
        })
        default:
            return state
    }
}