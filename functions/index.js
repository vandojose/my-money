const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.sumMove = functions.database
  .ref("/moves/{day}")
  .onWrite(async (change, context) => {
    const monthsRef = admin.database().ref("/months/" + context.params.day);
    const movesRef = change.after.ref;
    const movesSS = await movesRef.once("value");
    const moves = movesSS.val();

    let entry = 0;
    let output = 0;

    Object.keys(moves).forEach((m) => {
      if (moves[m].value > 0) {
        entry += moves[m].value;
      } else {
        output += moves[m].value;
      }
    });

    return monthsRef.transaction((current) => {
      if (current === null) {
        return {
          entry,
          entry_forecast: 0,
          output,
          output_forecast: 0,
        };
      }
      return {
        ...current,
        entry,
        output,
      };
    });
  });
