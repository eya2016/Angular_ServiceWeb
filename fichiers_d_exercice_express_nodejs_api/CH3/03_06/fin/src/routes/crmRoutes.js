import { runInNewContext } from "vm";
import { 
    addNewContact, 
    getContacts,
    getContactWithID,
} from '../controllers/crmControllers';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request de: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
        
    
    .post(addNewContact);
    
    app.route('/contact/:contactId')
        // contact avec ID
        .get(getContactWithID)

        // mise à jour contact
        .put((req, res) =>
            res.send('demande PUT avec succès'))
        
        // supprimer contact    
        .delete((req, res) =>
            res.send('demande DELETE avec succès'));
}

export default routes;
