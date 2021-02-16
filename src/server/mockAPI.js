let json = {
  "status": {
    "code": "0",
    "msg": "OK",
    "credits": "1",
    "remaining_credits": "19988"
  },
  "model": "damianModel_en",
  "score_tag": "N+",
  "agreement": "AGREEMENT",
  "subjectivity": "OBJECTIVE",
  "confidence": "100",
  "irony": "NONIRONIC",
  "sentence_list": [
    {
      "text": "My vacum cleaner sucks dirt very well",
      "inip": "0",
      "endp": "36",
      "bop": "y",
      "confidence": "100",
      "score_tag": "N+",
      "agreement": "AGREEMENT",
      "segment_list": [
        {
          "text": "My vacum cleaner sucks dirt very well",
          "segment_type": "main",
          "inip": "0",
          "endp": "36",
          "confidence": "100",
          "score_tag": "N+",
          "agreement": "AGREEMENT",
          "polarity_term_list": [
            {
              "text": "suck",
              "inip": "17",
              "endp": "21",
              "confidence": "100",
              "score_tag": "N+",
              "sentimented_concept_list": [
                {
                  "form": "cleaner",
                  "id": "f19af54d97",
                  "variant": "cleaner",
                  "inip": "9",
                  "endp": "15",
                  "type": "Top>OtherEntity>Vocation",
                  "score_tag": "N+"
                }
              ]
            }
          ],
          "segment_list": [
            {
              "text": "very well",
              "segment_type": "main",
              "inip": "28",
              "endp": "36",
              "confidence": "100",
              "score_tag": "P+",
              "agreement": "AGREEMENT",
              "polarity_term_list": [
                {
                  "text": "very well",
                  "inip": "28",
                  "endp": "36",
                  "confidence": "100",
                  "score_tag": "P+"
                }
              ]
            }
          ]
        }
      ],
      "sentimented_entity_list": [],
      "sentimented_concept_list": [
        {
          "form": "cleaner",
          "id": "f19af54d97",
          "type": "Top>OtherEntity>Vocation",
          "score_tag": "N+"
        }
      ]
    }
  ],
  "sentimented_entity_list": [],
  "sentimented_concept_list": [
    {
      "form": "cleaner",
      "id": "f19af54d97",
      "type": "Top>OtherEntity>Vocation",
      "score_tag": "N+"
    }
  ]
}

module.exports = json
