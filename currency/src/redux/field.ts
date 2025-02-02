export interface FieldState{
    value: string;
    focus: boolean;
}

const initialState: FieldState= {
    value: '',
    focus: false
}

const SET='field/SET';
type SET=typeof SET;

const FOCUS='field/FOCUS';
type FOCUS=typeof FOCUS;

const BLUR='field/BLUR';
type BLUR=typeof BLUR;

export interface SetAction{
    type: SET;
    payload: string;
}

export interface FocusAction{
    type: FOCUS;
}

export interface BlurAction{
    type: BLUR;
}

type FieldAction = SetAction | FocusAction | BlurAction;

export default function reducer(state: FieldState=initialState, action:FieldAction):FieldState{
    switch(action.type){
        case SET:
            return{
                ...state,
                value: action.payload
            }
            case FOCUS:
                return{
                    ...state,
                    focus: true
                }            
            case BLUR:
                return{
                    ...state,
                    focus: false
                }            
    
    }
}

export const set = (payload: string):SetAction=>({
    type: SET,
    payload
})

export const focus=():FocusAction=>({type:FOCUS});

export const blur=():BlurAction=>({type:BLUR});