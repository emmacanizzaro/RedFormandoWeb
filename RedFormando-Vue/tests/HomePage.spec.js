import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HomePage from '../src/components/HomePage.vue'

describe('HomePage', () => {
  it('renderiza el título principal', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toMatch(/Bienvenido|RedFormando|Inicio/i)
  })
})
