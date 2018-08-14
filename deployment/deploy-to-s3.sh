#! /bin/sh

BUCKET="mariah-app"

# Get command line parameters
while [ "$1" != "" ]; do
  case $1 in
    -p | --profile )
    shift
    PROFILE=$1
    ;;

    -b | --bucket-name )
    shift
    BUCKET=$1
    ;;

  esac
  shift
done

aws s3 sync ./build s3://$BUCKET
