/*Assignment
In Textio, users create text campaigns to send messages to their contacts. Each campaign needs a unique ID for tracking and management.

Complete the addID function. It takes a campaignRecord object as input and returns it with a newly generated id property added:

campaignName-senderName

Where:

campaignName is the name of the campaign (e.g., "Welcome Campaign").
senderName is the name of the sender (e.g., "Elsa"). */

function addID(campaignRecord) {
  // ?
  return campaignRecord.id = campaignRecord.name - campaignRecord.sender ;
}

// don't touch below this line

export { addID };
