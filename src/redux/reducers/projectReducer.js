const initialState = {
    projects: [],
    project: {},
    collaborations:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET_PROJECTS':
        return {
            ...state,
            projects: payload
        }

    case 'CREATE_PROJECT': 
        return {
            ...state,
            projects: {...state.projects, payload}
        }

    case 'SHOW_PROJECT':
        return {
            ...state,
            project: payload
        }

    case 'CLEAR_PROJECT':
        return {
            ...state,
            project: {}
        }

    case 'GET_COLLABS':
        return{
            ...state,
            collaborations: payload
        }

    case 'JOIN_PROJECT':
        return { 
        ...state,
          collaborations: [...state.collaborations, payload]
        }
          
        

    default:
        return state;
    }
}
