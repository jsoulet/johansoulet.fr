import React, { FC } from 'react'
import tw from 'twin.macro'
import { useIntl } from 'gatsby-plugin-intl'
import Button from 'components/Button/Button'

const SendButton: FC<{ disabled?: boolean; label: string; hasError?: boolean }> = ({
  disabled,
  label,
  hasError,
}) => {
  const { formatMessage } = useIntl()
  return (
    <div css={[tw`flex flex-col items-center`]}>
      <Button type="submit" disabled={disabled} color="green">
        {label}
      </Button>
      {hasError && (
        <p css={[tw`mt-5 text-red-500 text-sm italic`]}>
          {formatMessage({ id: 'index.contact.form.errorMessage.label' })}
        </p>
      )}
    </div>
  )
}

export default SendButton
