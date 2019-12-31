import { renderHook } from '@testing-library/react-hooks'
import { useEmbedly } from './useEmbedly'

describe('useEmbedly', () => {
  it('should return something', () => {
    const { result } = renderHook(() => useEmbedly())
    expect(result.current).toBeTruthy()
  })
})
