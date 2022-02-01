import { Model } from 'sequelize/types'

export interface Challenge extends Model {
  name: string
  category: string
  description: string
  difficulty: number
  hint: string
  hintUrl: string
  mitigationUrl?: string
  key: string
  disabledEnv?: string | string[]
  tutorial?: { order: number }
  tags?: string[]
}

export interface User extends Model {
  username?: string
  email: string
  password: string
  customDomain?: string
  key: string
  role: string
  deletedFlag?: boolean
  profileImage?: string
  securityQuestion?: {
    id: number
    answer: string
  }
  feedback?: {
    comment: string
    rating: number
  }
  address?: Address[]
  card?: Card[]
  totpSecret?: string
  walletBalance?: number
}

export interface Delivery extends Model {
  name: string
  price: number
  deluxePrice: number
  eta: number
  icon: string
}

export interface Address extends Model {
  fullName: string
  mobileNum: number
  zipCode: string
  streetAddress: string
  city: string
  state: string
  country: string
}

export interface Card extends Model {
  fullName: string
  cardNum: number
  expMonth: number
  expYear: number
}

export interface Product extends Model {
  name: string
  description: string
  price?: number
  deluxePrice?: number
  quantity?: number
  limitPerUser?: number
  image?: string
  reviews?: Review[]
  deletedDate?: string
  deletedAt?: Date | string
  useForChristmasSpecialChallenge?: boolean
  keywordsForPastebinDataLeakChallenge?: string[]
  urlForProductTamperingChallenge?: string
  fileForRetrieveBlueprintChallenge?: string
}

export interface Review extends Model {
  text: string
  author: string
}

export interface Memory extends Model {
  image: string
  imagePath: string
  caption: string
  user: string
  geoStalkingMetaSecurityQuestion?: number
  geoStalkingMetaSecurityAnswer?: string
  geoStalkingVisualSecurityQuestion?: number
  geoStalkingVisualSecurityAnswer?: string
}

export interface Recycle extends Model {
  UserId: number
  quantity: number
  AddressId: number
  date: string
  isPickup: boolean
}

export interface SecurityQuestion extends Model {
  question: string
}

export interface Basket extends Model {
  Products: Product[]
}

export interface BasketItem extends Model {
  ProductId: number
  BasketId: number
  quantity: number
}