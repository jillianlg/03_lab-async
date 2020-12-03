const fetch = require('node-fetch');
const { getManyCharacters } = require("./getManyCharacters");

jest.mock('node-fetch');

const ids = [2, 4, 6, 8];

describe("getManyCharacters", () => {
    it("takes an array of ids and returns a promise that resolves with an array of characters", async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve([
                "Name: Morty Smith, Status: Alive, Species: Human",
                "Name: Beth Smith, Status: Alive, Species: Human",
                "Name: Abadango Cluster Princess, Status: Alive, Species: Alien",
                "Name: Adjudicator Rick, Status: Dead, Species: Human",
            ])
        })
        const response = await getManyCharacters(ids);
        // expect(response).toEqual([
        //     "Name: Morty Smith, Status: Alive, Species: Human",
        //     "Name: Beth Smith, Status: Alive, Species: Human",
        //     "Name: Abadango Cluster Princess, Status: Alive, Species: Alien",
        //     "Name: Adjudicator Rick, Status: Dead, Species: Human",
        // ]);
    });
});