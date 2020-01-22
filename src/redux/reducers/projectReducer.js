const initialState = {
    projects: [],
    project: {},
    collaborations:[],
    filter_by_active: false
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
            projects: [...state.projects, payload]
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
          
    case 'DECLARE_COMPLETED':
        return{
            ...state,
            project: payload
        }

    case 'FILTER_BY_ACTIVE':
        return{
            ...state,
            filter_by_active: true
        }

    default:
        return state;
    }
}
