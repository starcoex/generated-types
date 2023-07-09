import client from "../../../../libs/client";
export const movies = async (_parent, _arg, _ctx) => {
    return client.movie.findMany();
};
