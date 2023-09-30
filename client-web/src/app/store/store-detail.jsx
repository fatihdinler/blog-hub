import React, { useState } from 'react'
import { Helmet, Breadcrumb, ProductCard, Color } from '../../components'
import {
  Text, FormControl, FormLabel, Input, FormHelperText, Textarea, Button, Image, Badge, Tag, NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import ReactStars from 'react-rating-stars-component'


const StoreDetail = () => {
  const [orderedProduct, setOrderedProduct] = useState(1)
  const [form, setForm] = useState({
    name: '',
    email: '',
    title: '',
    comment: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <div>
      <Helmet title='Dynamic Store Detail' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Store', link: '/store', isActive: false },
          { content: 'Dynamic Store Detail', link: '/store/store-detail/:id', isActive: true },
        ]}
      />

      <div className='main-product-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='section-card rounded-5 d-flex flex-row '>
              <div className='col-6 align-self-center'>
                <div className='main-product-image'>
                  <div>
                    <Image
                      src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQE93_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR_GEO_TR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=VEt0Rkk1TGVZeSs2bXpncmJlRHRWUHZ4OU1ucmxYekw5aGF6a2ZZcG9hazdPN2hFakIxbjdEcTdvSm41NlVxWjY4QUVCdUdBMlBPcFgrL3RBcVB1cmY5akxmSjBzTThIaWphQnAvU3pXTzFVbjAxQm9kQVVJTVFJT1gzMnV6SXd6N2RLYzJIbHdrekVWK3ZsV1lXZmRFQUxoYnJoMVcwcVlvdURzbkxzdzl6MXIwVUcrMFhteGxCOFlWQXFCMmxGU2h0TkZ5cm1uQzNHZnRVSlZLT3NOQT09'
                      className='rounded-5 primary-image'
                    />
                  </div>
                  <div className='d-flex'>
                    <Image
                      src='https://gentwith.com/wp-content/uploads/2019/08/Eva-Navy-Blue-Round-Watch-400x500.jpg'
                      className='rounded-5 secondary-product-images'
                    />
                    <Image
                      src='https://gentwith.com/wp-content/uploads/2019/08/Eva-Navy-Blue-Round-Watch-400x500.jpg'
                      className='rounded-5 secondary-product-images'
                    />
                    <Image
                      src='https://gentwith.com/wp-content/uploads/2019/08/Eva-Navy-Blue-Round-Watch-400x500.jpg'
                      className='rounded-5 secondary-product-images'
                    />
                  </div>
                </div>
              </div>

              <div className='col-6'>
                <Text as='h5'>Kids Headphones Bulk 10 Pack Multi Colored For Students</Text>
                <Text as='p'>$100</Text>

                <div className='dividor'></div>

                <div className='product-detail'>
                  <Text as='h5' className='mb-0'>Brand: </Text>
                  <Text as='p' className='mb-0'>Havels</Text>
                </div>

                <div className='product-detail'>
                  <Text as='h5' className='mb-0'>Type: </Text>
                  <Badge colorScheme='green'>Watch</Badge>
                </div>

                <div className='product-detail'>
                  <Text as='h5' className='mb-0'>Availability: </Text>
                  <Badge colorScheme='blue'>In Stock</Badge>
                </div>

                <div className='product-detail'>
                  <Text as='h5' className='mb-0'>Categories: </Text>
                  <Tag>alsjdkş</Tag>
                  <Tag>alsjdkş</Tag>
                  <Tag>alsjdkş</Tag>
                </div>

                <div className='product-detail'>
                  <Text as='h5' className='mb-0'>SKU: </Text>
                  <Tag>235891</Tag>
                </div>

                <div className='product-detail'>
                  <Text as='h5' className='mb-0'>Categories: </Text>
                  <Tag>alsjdkş</Tag>
                </div>

                <div className='product-detail'>
                  <Text as='h5' className='mb-0'>Size: </Text>
                  <Badge colorScheme='blue' onSelect={() => console.log('slected')}>S</Badge>
                  <Badge colorScheme='blue'>M</Badge>
                  <Badge colorScheme='blue'>L</Badge>
                  <Badge colorScheme='blue'>XL</Badge>
                </div>

                <div className='product-detail'>
                  <Text as='h5' className='mb-0'>Color: </Text>
                  <Color
                    colors={['red', 'purple', 'blue']}
                  />
                </div>

                <div className='product-detail'>
                  <Text as='h5' className='mb-0'>Quantitiy: </Text>
                  <div>
                    <NumberInput
                      defaultValue={1}
                      min={0}
                      max={30}
                      clampValueOnBlur={false}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </div>
                </div>

                <div className='product-detail'>
                  <Button colorScheme='teal' variant='solid'>
                    Add to Cart
                  </Button>
                  <Button colorScheme='teal' variant='outline'>
                    Buy It Now
                  </Button>
                </div>

                <div className='product-detail mt-5'>
                  <Accordion allowToggle flex='1'>
                    <AccordionItem>
                      <h2>
                        <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
                          <Box as="span" flex='1' textAlign='left'>
                            Shipping & Returns
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className='product-detail'>
                  <Accordion allowToggle flex='1'>
                    <AccordionItem>
                      <h2>
                        <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
                          <Box as="span" flex='1' textAlign='left'>
                            Materials
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className='product-detail'>
                  <Accordion allowToggle flex='1'>
                    <AccordionItem>
                      <h2>
                        <AccordionButton _expanded={{ bg: 'teal', color: 'white' }}>
                          <Box as="span" flex='1' textAlign='left'>
                            Care Instructions
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='description-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-card rounded-5'>
                <Text as='h4'>Description</Text>
                <Text as='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quae molestias, consectetur corrupti similique saepe aut aliquam exercitationem, ipsam explicabo provident inventore! Dicta, ad, cumque obcaecati assumenda similique consectetur id vel debitis aliquam omnis, cupiditate illo minus velit itaque sit blanditiis at? Voluptatem, dolor nulla? Similique suscipit reiciendis vero perspiciatis.</Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='comments-wrapper home-wrapper-secondary py-5'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <div className='section-card rounded-5'>
                  <div className='review-head d-flex justify-content-between align-items-end'>
                    <div>
                      <Text as='h4' className='mb-2'>Customer Reviews</Text>
                      <div className='d-flex gap-10 align-items-center'>
                        <ReactStars
                          count={5}
                          size={24}
                          value={5}
                          edit={false}
                          activeColor='teal'
                        />
                        <Text className='mb-0'>Based on 2 reviews</Text>
                      </div>
                    </div>
                    {
                      orderedProduct !== 0 && (
                        <div>
                          <Button colorScheme='teal' variant='link'>
                            Write a review
                          </Button>
                        </div>
                      )
                    }
                  </div>

                  <div className='comment-list'>
                    <div className='comments py-3'>
                      <div className='d-flex gap-10 align-items-center'>
                        <Text className='mb-0 customer-name'>Fatih Erkam Dinler</Text>
                        <ReactStars
                          count={5}
                          size={24}
                          value={1}
                          edit={false}
                          activeColor='teal'
                        />
                      </div>
                      <Text as='p' className='comment-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis magnam ut, modi dolores quod ex consequatur ducimus tempore, quaerat, minus veniam necessitatibus iusto illo laudantium natus consequuntur optio accusantium. Perspiciatis.</Text>
                      <div className='dividor'></div>
                    </div>

                    <div className='comments py-3'>
                      <div className='d-flex gap-10 align-items-center'>
                        <Text className='mb-0 customer-name'>Fatih Erkam Dinler</Text>
                        <ReactStars
                          count={5}
                          size={24}
                          value={1}
                          edit={false}
                          activeColor='teal'
                        />
                      </div>
                      <Text as='p' className='comment-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis magnam ut, modi dolores quod ex consequatur ducimus tempore, quaerat, minus veniam necessitatibus iusto illo laudantium natus consequuntur optio accusantium. Perspiciatis.</Text>
                      <div className='dividor'></div>
                    </div>

                    <div className='comments py-3'>
                      <div className='d-flex gap-10 align-items-center'>
                        <Text className='mb-0 customer-name'>Fatih Erkam Dinler</Text>
                        <ReactStars
                          count={5}
                          size={24}
                          value={1}
                          edit={false}
                          activeColor='teal'
                        />
                      </div>
                      <Text as='p' className='comment-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis magnam ut, modi dolores quod ex consequatur ducimus tempore, quaerat, minus veniam necessitatibus iusto illo laudantium natus consequuntur optio accusantium. Perspiciatis.</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='reviews-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-card rounded-5'>
                <div className='review-form'>
                  <FormControl isRequired className='form-controller'>
                    <Text as='h4'>Write a Review</Text>
                    <div>
                      <FormLabel>Name</FormLabel>
                      <Input
                        name='name'
                        placeholder='John Doe'
                        value={form.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <FormLabel>Email</FormLabel>
                      <Input
                        name='email'
                        type='email'
                        placeholder='johndoe@mail.com'
                        value={form.email}
                        onChange={handleInputChange}
                      />
                      <FormHelperText>We'll never share your e-mail address</FormHelperText>
                    </div>
                    <div>
                      <FormLabel>Rating</FormLabel>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        activeColor='teal'
                      />
                    </div>
                    <div>
                      <FormLabel>Review Title</FormLabel>
                      <Input
                        name='title'
                        placeholder='Lorem Ipsum'
                        value={form.title}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <FormLabel>Review Content</FormLabel>
                      <Textarea
                        name='comment'
                        value={form.comment}
                        onChange={handleInputChange}
                        placeholder={`Please be kind while you're commenting 😋`}
                      />
                    </div>
                    <div>
                      <Button
                        colorScheme='teal'
                        variant='solid'
                        className='w-100'>
                        Send
                      </Button>
                    </div>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='popular-wrapper home-wrapper-secondary py-5 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <Text as='h3' className='section-heading'>
                You May Also Like
              </Text>
            </div>
            <div className='row'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoreDetail