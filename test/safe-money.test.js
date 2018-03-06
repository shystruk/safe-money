import * as safeMoney from '../lib/safe-money'

describe('safeMoney', () => {
  describe('fromInteger', () => {
    it('should return money from integer', function() {
      const money = safeMoney.fromInteger(1000, safeMoney.EUR)

      expect(money.amount).toEqual(1000)
      expect(money.currency).toEqual('EUR')
    })

    it('should not create a new instance from decimal', function() {
      expect(function() {
        safeMoney.fromInteger(10.42, safeMoney.EUR)
      }).toThrow(TypeError)
    })
  })
})
