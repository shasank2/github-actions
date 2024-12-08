import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
  it('should render nothing when image list is empty', () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />)
    expect(container).toBeEmptyDOMElement();
  })

  it('should render a list of images', ()=>{
    const imageData = ['image1','image2']

    render(<ProductImageGallery imageUrls={imageData}/> )

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(imageData.length)
    imageData.forEach((url, index)=>{
      expect(images[index]).toHaveAttribute('src', url)
    })
  })
})