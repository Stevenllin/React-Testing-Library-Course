const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Laith',
          last: 'Harb'
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/19.jpg'
        },
        login: {
          username: 'ThePhoneGOAT'
        }
      }
    ]
  }
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}