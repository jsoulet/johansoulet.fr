import React, { FC, useCallback, useState } from 'react'
import tw from 'twin.macro'
import { useIntl } from 'gatsby-plugin-intl'
import Input from './Input'
import SendButton from './SendButton'

const FORM_NAME = 'contact-form'
const DEFAULT_FORM_VALUES = {
  firstname: '',
  lastname: '',
  email: '',
  message: '',
}

const encode = (data: { [key: string]: string }): string => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Form: FC<{}> = () => {
  const { formatMessage } = useIntl()
  const [formStatus, setFormStatus] = useState({
    isSending: false,
    hasError: false,
    isSent: false,
  })

  const [formData, setFormData] = useState(DEFAULT_FORM_VALUES)

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault()
      setFormStatus({
        ...formStatus,
        isSending: true,
      })

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, name: FORM_NAME, ...formData }),
      })
        .then(() => {
          setFormStatus({
            isSent: true,
            isSending: false,
            hasError: false,
          })
          setFormData(DEFAULT_FORM_VALUES)
        })
        .catch(() => {
          setFormStatus({
            ...formStatus,
            isSent: false,
            isSending: false,
            hasError: true,
          })
        })
    },
    [formData, formStatus, setFormStatus]
  )

  const handleOnChange = useCallback(
    (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      })
    },
    [formData, setFormData]
  )

  return (
    <form css={[tw`w-full`]} onSubmit={handleOnSubmit}>
      <div css={[tw`flex flex-wrap mb-6`]}>
        <div css={[tw`w-full md:w-1/2 px-3 mb-6 md:mb-0`]}>
          <Input
            id="firstname"
            label={formatMessage({ id: 'index.contact.form.firstname.label' })}
            placeholder="James"
            onChange={handleOnChange}
            value={formData.firstname}
          />
        </div>
        <div css={[tw`w-full md:w-1/2 px-3`]}>
          <Input
            id="lastname"
            label={formatMessage({ id: 'index.contact.form.lastname.label' })}
            placeholder="Gordon"
            onChange={handleOnChange}
            value={formData.lastname}
          />
        </div>
      </div>
      <div css={[tw`flex flex-wrap mb-6`]}>
        <div css={[tw`w-full px-3`]}>
          <div css={[tw`w-full`]}>
            <Input
              id="email"
              type="email"
              required
              label={formatMessage({ id: 'index.contact.form.email.label' })}
              placeholder="james.gordon@gcpd.com"
              onChange={handleOnChange}
              value={formData.email}
            />
          </div>
        </div>
      </div>
      <div css={[tw`flex flex-wrap mb-6`]}>
        <div css={[tw`w-full px-3`]}>
          <Input
            id="message"
            label={formatMessage({ id: 'index.contact.form.message.label' })}
            required
            type="textarea"
            placeholder={formatMessage({ id: 'index.contact.form.message.placeholder' })}
            onChange={handleOnChange}
            value={formData.message}
          />
        </div>
      </div>
      <SendButton
        isSending={formStatus.isSending}
        isSent={formStatus.isSent}
        hasError={formStatus.hasError}
      />
    </form>
  )
}

export default Form
