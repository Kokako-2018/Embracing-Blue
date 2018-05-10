import request from 'superagent'



export const viewIdentity = (identity) => {
  return {
    type: 'VIEW_IDENTITY',
    identity
  }
}

export const displayIdentities = (identity) => {
  return {
    type: 'DISPLAY_IDENTITIES'
  }
} 

// displayAll doesn't have a string that changes, since it's always going to do the one thing 