function getEvacuationMessage(suggestions: any):any {
    return {
        "type": "template",
        "altText": "請選擇一個疏散地點",
        "template": {
          "type": "carousel",
          "columns": [
            {
              "thumbnailImageUrl": "https://raw.githubusercontent.com/ryankert01/flow-control-line-bot/main/map_pics/1-1.png",
              "imageBackgroundColor": "#FFFFFF",
              "title": `推薦疏散地點(1) \n${suggestions[0]}`,
              "text": "點選下方按鈕以選擇疏散地點",
              "defaultAction": {
                "type": "uri",
                "label": "選擇",
                "uri": "http://example.com/page/123"
              },
              "actions": [
                {
                  "type": "postback",
                  "label": "選擇",
                  "data": `[1] ${suggestions[0]}`
                },
              ]
            },
            {
              "thumbnailImageUrl": "https://raw.githubusercontent.com/ryankert01/flow-control-line-bot/main/map_pics/1-1.png",
              "imageBackgroundColor": "#000000",
              "title": `推薦疏散地點(2) \n${suggestions[1]}`,
              "text": "點選下方按鈕以選擇疏散地點",
              "defaultAction": {
                "type": "uri",
                "label": "選擇",
                "uri": "http://example.com/page/222"
              },
              "actions": [
                {
                  "type": "postback",
                  "label": "選擇",
                  "data": `[2] ${suggestions[1]}`
                },
              ]
            },
            {
                "thumbnailImageUrl": "https://raw.githubusercontent.com/ryankert01/flow-control-line-bot/main/map_pics/1-1.png",
                "imageBackgroundColor": "#000000",
                "title": `推薦疏散地點(3) \n${suggestions[2]}`,
                "text": "點選下方按鈕以選擇疏散地點",
                "defaultAction": {
                  "type": "uri",
                  "label": "選擇",
                  "uri": "http://example.com/page/222"
                },
                "actions": [
                  {
                    "type": "postback",
                    "label": "選擇",
                    "data": `[3] ${suggestions[2]}`
                  },
                ]
              }
          ],
          "imageAspectRatio": "rectangle",
          "imageSize": "cover"
        }
      };
}
function getDangerousAreaMessage(dangerous_areas: any):any {

    return{
        "type": "imagemap",
        "baseUrl": "https://raw.githubusercontent.com/ryankert01/flow-control-line-bot/main/NewPicture",
        "altText": "如果你在下列位置，請點選圖片",
        "baseSize": {
          "width": 1040,
          "height": 1040
        },
        "actions": [
          {
            "type": "message",
            "text": "您點擊了 Taipei 101",
            "area": {
              "x": 0,
              "y": 0,
              "width": 520,
              "height": 520
            }
          },
          {
            "type": "message",
            "text": "您點擊了圖片 Xinyi plaza",
            "area": {
              "x": 520,
              "y": 0,
              "width": 520,
              "height": 520
            }
          },
          {
            "type": "message",
            "text": "您點擊了圖片 Taipei world trade center",
            "area": {
              "x": 0,
              "y": 520,
              "width": 520,
              "height": 520
            }
          },
          {
            "type": "message",
            "text": "您點擊了圖片 Breeze Nan San",
            "area": {
              "x": 520,
              "y": 520,
              "width": 520,
              "height": 520
            }
          }
        ]
    }    
}

// choose_place_id is the id of the place that user choose
function getChoosePlaceMapMessage(prefered_place:number, choose_place_id: number, choose_place_name: String):any {
    // replace all the space with '+' in the place name
    choose_place_name = choose_place_name.replace(/ /g, '+');
    return {
        "type": "template",
        "altText": "這是替您規劃的疏散路線指引",
        "template": {
          "type": "image_carousel",
          "columns": [
            {
              "imageUrl": `https://raw.githubusercontent.com/ryankert01/flow-control-line-bot/main/map_pics/${prefered_place}-${choose_place_id}.png`,
              "action": {
                "type": "uri",
                "label": "Navigate",
                "uri": `https://www.google.com/maps/dir/?api=1&origin=%E7%9B%AE%E5%89%8D%E6%89%80%E5%9C%A8%E4%BD%8D%E7%BD%AE&destination=${choose_place_name}&travelmode=walking&dir_action=navigate`
              }
            }
          ]
        }
      };
}



export { getEvacuationMessage, getDangerousAreaMessage, getChoosePlaceMapMessage };
