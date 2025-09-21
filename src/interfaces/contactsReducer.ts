import { Contact, Action } from "../contact";

export interface AppState  {
    contact: Contact[];



}


export const contactReducer = (state: AppState, action: Action): AppState => {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]

               
            };

            case "UPDATE_CONTACT":
                const { id, updates } = action.payload;

                return {
                    ...state,
                    contacts: state.contacts.map((contact) => {
                        if (contact.id === id) {
                            return {
                                ...contact,
                                ...updates
                            };
                        }

                        return contact;
                    })
                };

                default:
                    return state;
    }
    }
}