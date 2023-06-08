function getEvacuationMessage(suggestions: any):any {
    return {
        type: "text",
        text: `You can go to :
[1] ${suggestions[0].name}
[2] ${suggestions[1].name}
[3] ${suggestions[2].name}`};
}

function getDangerousAreaMessage(dangerous_areas: any):any {
    return {
        type: "text",
        text: `You are in a dangerous area! Please avoid the following areas: ${dangerous_areas.join(', ')}
安安，您在哪裡附近呢?:
1. metro-entry-1
2. metro-entry-2
3. bus-station-1
4. bus-station-2`
      };
}


export { getEvacuationMessage, getDangerousAreaMessage };