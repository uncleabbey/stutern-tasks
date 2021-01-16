const {createStore} = Redux

    const SAD_ASCI = "SAD_ASCI";
    const HAPPY_ASCI = "HAPPY_ASCI";
    const CONFUSED_ASCI = "CONFUSED_ASCI";
    const ANGRY_ASCI = "ANGRY_ASCI";
    
    function happyAction (asci) {
        return {
            type: HAPPY_ASCI,
            payload: asci
        }
    }
    function sadAction (asci) {
        return {
            type: SAD_ASCI,
            payload: asci
        }
    }
    function confusedAction (asci) {
        return {
            type: CONFUSED_ASCI,
            payload: asci
        }
    }
    function angryAction (asci) {
        return {
            type: ANGRY_ASCI,
            payload: asci
        }
    }
    
    const initial = {
        asci: "😑"
    }
    const reducer = (state=initial, action) => {
        switch (action.type) {
            case SAD_ASCI:
                return {
                    ...state,
                    asci: action.payload
                }
                
                case HAPPY_ASCI:
                    return {
                        ...state,
                        asci: action.payload
                    }
                    
                    case CONFUSED_ASCI:
                        return {
                            ...state,
                            asci: action.payload
                        }
                        
                        case ANGRY_ASCI:
                            return {
                                ...state,
                                asci: action.payload
                            }
                            
                            default:
            return state;
        }
    }

    let store = createStore(reducer)
    console.log(store.getState())
    const container = document.getElementById("asci-cont");
    
    container.innerHTML = `<pre>${store.getState().asci}</pre>`;
    
    
    document.getElementById("happy-btn").addEventListener("click", (e) => {
        store.dispatch(happyAction("✧♡(◕‿◕✿)"))
        container.innerHTML = `<pre>${store.getState().asci}</pre>`;
    })
    document.getElementById("sad-btn").addEventListener("click", (e) => {
        store.dispatch(sadAction("(   ͡°╭╮ʖ   ͡°)"))
        container.innerHTML = `<pre>${store.getState().asci}</pre>`;
    })
    document.getElementById("confused-btn").addEventListener("click", (e) => {
        store.dispatch(confusedAction("¯\(°_o)/¯"))
        container.innerHTML = `<pre>${store.getState().asci}</pre>`;
    })
    document.getElementById("angry-btn").addEventListener("click", (e) => {
        store.dispatch(angryAction("ლಠ益ಠ)ლ"))
        container.innerHTML = `<pre>${store.getState().asci}</pre>`;
    })



