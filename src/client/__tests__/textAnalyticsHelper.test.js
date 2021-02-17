import 'regenerator-runtime/runtime';
import { submitText } from "../js/textAnalyticsHelper";
global.fetch = require("node-fetch");

test('The server returns sentiment analysis', async () => {
  const data = await submitText("http://localhost:8081/mock", "My vacum cleaner sucks dirt very well");

  expect(data.model).toBe("damianModel_en");
  expect(data.sentence_list[0].text).toBe("My vacum cleaner sucks dirt very well");
});
