import request from 'superagent'



export const viewResource = (resource) => {
  return {
    type: 'VIEW_RESOURCE',
    resource
  }
}

export const displayResources = (resource) => {
  return {
    type: 'DISPLAY_RESOURCES'
  }
}

// displayAll doesn't have a string that changes, since it's always going to do the one thing 