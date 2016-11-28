
const initialState = [
  {
    id: 1,
    reportedOn: Date.now() - 3600,
    reportedBy: "john smith",
    page: 1,
    line: "Abbr 6.4",
    description: `<p>foo <strong>bar</strong></p>`,
    revision: 1
  },
  {
    id: 2,
    reportedOn: Date.now() - 3600,
    reportedBy: "john smith",
    page: 1,
    line: "Abbr 6.4",
    description: `<p>foo <strong>bar</strong></p>`,
    revision: 1
  },
  {
    id: 3,
    reportedOn: Date.now() + 3457,
    reportedBy: "asd asd",
    page: 4,
    line: "qwe 2.32",
    description: `<p>qwe <strong>qux</strong></p>`,
    revision: 1
  }
]

export default function erratas(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const getState = (state) => state.erratas
export const getErratasByPage = (state) => {
  return getState(state).reduce((memo, e) => {
    return {
      ...memo,
      [e.page]: (memo[e.page] || []).concat([e])
    }
  }, {})
}
