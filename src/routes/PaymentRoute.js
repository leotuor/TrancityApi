import Payment from "../controllers/PaymentController";

export default (app) => {
  app.post('/pagamento/persist', Payment.persist);
  app.post('/pagamento/persist/:id', Payment.persist);
  app.post('/pagamento/destroy', Payment.destroy);
  app.get('/pagamento', Payment.get);
  app.get('/pagamento/:id', Payment.get);
};
