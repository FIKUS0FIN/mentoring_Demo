#!/bin/bash

function root
{

  ##----------------------------------------------------------------------------
  yes | awless create instance name=${NAME} image=ami-3f1bd150 keypair=ubuntu \
  subnet=subnet-870997ec securitygroup=@BraineNew_ZAB \
  userdata=https://raw.githubusercontent.com/FIKUS0FIN/aws_demo/master/provisionign_pakeges/primary_setup.sh > 1_raw.txt
  ##----------------------------------------------------------------------------


  AWS_ID=$(cat 1_raw.txt | grep "instance = " | awk '{print $6}')
  AWS_DNS=$(awless show $AWS_ID | grep PublicDNS | awk '{print $4}')
  echo "$AWS_DNS" > ../1_aws_DNS.conf
  echo "$AWS_ID" > ../1_aws_id.conf
  yes | awless check instance id=$AWS_ID state=running
  yes | awless create tag key=TAG resource=$AWS_ID value=${TAG}
  echo "${TAG}" > ../1_aws_tag.conf
  awless show $AWS_ID
  sleep 10
}

function kill_aws ()
{
  if [[ ${KILL} == "True" ]]; then
    echo "killing box "
    aws ec2 terminate-instances --instance-ids $AWS_ID
  fi
}

#-------------------------------------------------------------------------------

root
kill_aws ${KILL}

echo "waiting for provisioning on box "
sleep 60
