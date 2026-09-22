let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva Confirmada"
                  :(quartosDisponiveis > 0) ? "Aguardando confirmação"
                  :"Sem quartos disponiveis";

consolo.log(statusReserva); //Saída: "Reserva confirmada"